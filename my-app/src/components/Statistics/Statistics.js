
import PropTypes from "prop-types";
import Section from "../Section/Section";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    return (
        <Section title={title}>
            <ul className={s.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={s.item} key={id}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;