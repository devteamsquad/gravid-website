import { HELP_CENTER_DETAILS } from "../../HelpDetails/data";

export function searchHelpCenter(query) {
  const results = HELP_CENTER_DETAILS.flatMap((help) => {
    const titleMatch = help.data.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return help.data.questions.flatMap((question) => {
      const questionTitleMatch = question.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const questionDescriptionMatch = question.description
        .toLowerCase()
        .includes(query.toLowerCase());

      // Vérification des étapes de la question
      const stepMatches = question.steps.flatMap((step) => {
        const stepTitleMatch = step.title
          .toLowerCase()
          .includes(query.toLowerCase());
        const stepDescriptionMatch = step.description
          .toLowerCase()
          .includes(query.toLowerCase());

        if (stepTitleMatch || stepDescriptionMatch) {
          return [
            {
              phrase: stepDescriptionMatch ? step.description : null,
              title: step.title,
            },
          ];
        }

        return [];
      });

      // Si une correspondance a été trouvée, retourne l'objet correspondant
      if (
        titleMatch ||
        questionTitleMatch ||
        questionDescriptionMatch ||
        stepMatches.length > 0
      ) {
        return [
          {
            id: help.data.id, // Assurez-vous que help.data a un id
            title: help.data.title,
            phrases: [
              question.title,
              questionDescriptionMatch ? question.description : null,
              ...stepMatches.map((stepMatch) => ({
                phrase: stepMatch.phrase,
                title: stepMatch.title,
              })),
            ].filter(Boolean),
          },
        ];
      }

      return [];
    });
  });

  return results;
}

export const contactSupport = (subject, message) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedMessage = encodeURIComponent(message);

  const mailtoLink = `mailto:websitesupport@snapbrillia.com?subject=${encodedSubject}&body=%0A${encodedMessage}`;

  window.location.href = mailtoLink;
};
