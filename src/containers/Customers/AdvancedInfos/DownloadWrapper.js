import React from 'react';
import PropTypes from 'prop-types';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {},
  title: {
    marginTop: '14px',
    fontWeight: 'bold',
    fontSize: '22px',
  },
});

const DownloadWrapper = ({ children, questionnaires }) => {
  const PDFDocument = () => (
    <Document>
      <Page size="A4">
        {questionnaires?.map((data, index) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {index + 1}
              . 
              {' '}
              {data.question}
            </Text>
            <Text>{data.answer}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )

  return (
    <PDFDownloadLink document={<PDFDocument />} fileName="Your Questionnaire.pdf">
      {({ loading }) => (loading ? 'Loading...' : children)}
    </PDFDownloadLink>
  )
}

DownloadWrapper.propTypes = {
  questionnaires: PropTypes.array,
}

export default DownloadWrapper;
