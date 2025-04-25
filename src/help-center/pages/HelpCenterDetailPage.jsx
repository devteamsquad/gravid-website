import React, { useEffect, useState } from "react";
import HelpCenterItem from "../features/HelpDetails/components/HelpCenterItem/HelpCenterItem";
import { useParams } from "react-router-dom";
import { HELP_CENTER_DETAILS } from "../features/HelpDetails/data";

const HelpCenterDetailPage = () => {
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const data = HELP_CENTER_DETAILS.find((item) => item.id === id);
    setContent(data.data);
  }, [id]);

  return (
    <div>
      {content ? (
        <div>
          <HelpCenterItem data={content} />
        </div>
      ) : (
        <div>Chargement du contenu...</div>
      )}
    </div>
  );
};

export default HelpCenterDetailPage;
