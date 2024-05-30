import PropTypes from "prop-types";

export const QuestInfo = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    // тоже сделать oneof
    level: PropTypes.string.isRequired,
    // тоже сделать oneof
    peopleCount: PropTypes.arrayOf(PropTypes.number).isRequired,
    duration: PropTypes.oneOf([60, 90, 120])
});


export const OrderComponent = PropTypes.shape({
  name: PropTypes.string.isRequired,
  peopleCount: PropTypes.number.isRequired,
  phone: PropTypes.number.isRequired,
  isLegal: PropTypes.boolean,
});