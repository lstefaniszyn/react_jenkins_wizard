import { useState, useEffect } from 'react';
import { getTemplates } from './../../server/templateData';
import { nextButton } from './../commonActions';

export function useGetTemplates() {
  const [templateNames, setTemplateNames] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    () => {
      console.log('useEffect - useGetTemplates');
      let toUpdate = true;
      const fetchTemplates = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const response = await getTemplates();
          if (toUpdate) {
            setTemplateNames(response.data);
            nextButton.setDisable(false);
          }
        } catch (error) {
          console.log('Error: ', error);
          setIsError(true);
          setTemplateNames([]);
        }
        setIsLoading(false);
      };
      fetchTemplates();
      return () => {
        toUpdate = false;
      };
    }, // eslint-disable-next-line
    []
  );

  return [templateNames, isError, isLoading];
}
