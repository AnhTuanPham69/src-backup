import axios from 'axios';
import { post, del} from './utils';
// import { post } from './utils';

const CLIENT_ID = '50b73e2dc3f6fb5';

export async function getUrl(key, type) {
  return post('/presignedUrlS3', { key, type, isNotAdminUrl: true });
}

export async function deleteFile(url) {
  return del('/deleteFile', { url, isNotAdminUrl: true });
}

export async function uploadMedia(url, data) {
  return fetch(url, {
    method: 'PUT',
    body: data,
  }).then(() => url.substring(0, url.indexOf('?')));
}

export async function uploadMediaImgur(data) {
  return fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
    body: data,
  }).then((res) => res.json());
}

export async function uploadImages(data, onUploadProgress) {
  try {
    const res = await axios.request({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/file/uploadImages`,
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
      },
      data,
      onUploadProgress: (p) => {
        onUploadProgress &&
          onUploadProgress(Number((p.loaded / p.total) * 100).toFixed(2));
      },
    });
    return res.data.map((e) => ({
      ...e,
      image: process.env.REACT_APP_DRIVER_HOST + e.image,
      previewImage:
        process.env.REACT_APP_DRIVER_THUMBNAIL_HOST + e.previewImage,
    }));
  } catch (error) {
    return error;
  }
}


export async function downloadQuestionnaire(id) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/admin/assessments/${id}/pdf`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
      authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `questionnaire.pdf`,
    );

    document.body.appendChild(link);

    link.click();

    link.parentNode.removeChild(link);
  });
}