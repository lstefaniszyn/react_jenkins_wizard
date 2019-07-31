import { useState, useEffect } from 'react';
import { getTemplates } from './../../server/templateData';
import { nextButton } from './../commonActions';

export function useGetTemplates(username) {
  const [templateNames, setTemplateNames] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    () => {
      console.log('useEffect - useGetTemplates');
      const fetchTemplates = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const response = await getTemplates();
          setTemplateNames(response.data);
          nextButton.setDisable(false);
        } catch (error) {
          console.log('Error: ', error);
          setIsError(true);
          setTemplateNames([]);
        }
        setIsLoading(false);
      };
      fetchTemplates();
      return () => {};
    }, // eslint-disable-next-line
    []
  );

  return [templateNames, isError, isLoading];
}
