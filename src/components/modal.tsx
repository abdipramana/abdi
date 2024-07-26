import { useEffect } from "react";
import styles from "./modal.module.css";
import { Project } from "@/types/project";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  project: Project;
}
export const Modal = ({ show, onClose, project }: ModalProps) => {
  const animation = useSpring({
    transform: show ? "translateY(0)" : "translateY(100%)",
    opacity: show ? 1 : 0,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  // if no project selected, return null
  if (!show && !project) {
    return null;
  }

  return (
    <animated.div style={animation} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <figure className={styles.modalImage}>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
          />
        </figure>
        <div className={styles.modalText}>
          <h3>
            {project.title}{" "}
            {project.company && (
              <span className={styles.company}>{project.company}</span>
            )}
          </h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </animated.div>
  );
};
