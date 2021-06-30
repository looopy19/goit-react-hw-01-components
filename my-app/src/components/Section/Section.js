import s from "./Section.module.css";
import PropTypes from "prop-types";
import Container from "../Container/Container";

const Section = ({ title, children }) => (
    <section className={s.section}>
        {title && <h2 className={s.title}>{title}</h2>}
        <Container>{children}</Container>
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;