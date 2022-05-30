import styled from 'styled-components';

export default styled.div`
  .ql-editor {
    min-height: 150px;
    max-height: 400px;
  }

  .tox-editor-container {
    border-radius: 8px;
    display: flex;
    flex-direction: column-reverse !important;
    .tox-editor-header {
      border-bottom: none;
      border-top: 1px solid #e2e3e5;
    }
  }

  .tox-statusbar {
    display: none !important;
  }

  .tox, .tox-tinymce {
    border-bottom: none;
    border-radius: 8px;
  }

  .tox-tinymce {
    border-color: #e2e3e5;
    overflow: hidden;
  }

  .tox-icon {
    svg > g > path {
      fill: #9FA2AA;
    }
    svg > path {
      fill: #9FA2AA;
    }
  }

  .tox-tbtn__select-label {
    color: #9FA2AA;
  }
`;
