import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, styled } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Sidebar from '../HomePage/Sidebar';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

const CustomExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText, // Customize the color to complement the black background
}));

const FAQ = () => {
  const faqData = [
    {
      question: 'Do you offer free shipping?',
      answer: 'Yes, we provide free shipping on all orders within the country.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Please refer to our Return Policy page for more details.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Absolutely! Once your order is shipped, we will provide you with a tracking number and instructions on how to track your package.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping. Additional fees may apply depending on the destination country.',
    },
    {
      question: 'Are the shoes true to size?',
      answer: 'Our shoes are designed to fit true to size. We recommend referring to our size chart for accurate measurements and guidelines.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal for online payments.',
    },
    {
      question: 'How long does it take to process an order?',
      answer: 'We typically process orders within 1-2 business days. Shipping times may vary depending on the destination and selected shipping method.',
    },
    {
      question: 'Can I cancel or change my order?',
      answer: 'If you need to cancel or make changes to your order, please contact our customer support as soon as possible. We will do our best to accommodate your request.',
    },
    {
      question: 'Are your shoes eco-friendly?',
      answer: 'We are committed to sustainability. Our shoes are made from recycled materials and we strive to minimize our environmental impact throughout the manufacturing process.',
    },
    {
      question: 'Do you have a loyalty program?',
      answer: 'Yes, we offer a loyalty program for our valued customers. You can earn points on purchases and redeem them for discounts or exclusive perks.',
    },
    // Add more FAQ entries as needed
  ];

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box flex="1">
          <Box py={8} px={4}>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              Frequently Asked Questions
            </Typography>
            {faqData.map((faq, index) => (
              <Accordion key={index} elevation={0} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<CustomExpandMoreIcon />} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQ;
