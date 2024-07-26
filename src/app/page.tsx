"use client";

import { PROJECTS, SOCIAL } from "@/constants/data";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import { Project } from "@/types/project";
import { Modal } from "@/components/modal";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // show project modal
  const onShowProject = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // close project modal
  const onCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          <h1>I Gede Abdi Pramana</h1>
          <h4>Frontend Engineer</h4>
          <p>
            A passionate software engineer specializing in frontend development,
            dedicated to craft engaging and user-friendly interfaces. Proficient
            in JavaScript and experienced with React, always open to exploring
            new ideas, technologies and work collaboratively.
          </p>
          <nav className={styles.nav}>
            {SOCIAL.map(({ label, icon: Icon, href, color }) => (
              <a
                key={label}
                href={href}
                className={styles.item}
                title={label}
                target="_blank"
                style={{ backgroundColor: color }}
              >
                <Icon className={styles.icon} />
              </a>
            ))}
          </nav>
        </section>
        <section className={styles.portfolio}>
          {PROJECTS.map((project: Project) => (
            <div
              key={project.title}
              className={styles.portfolioItem}
              onClick={() => onShowProject(project)}
            >
              <figure>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  layout="responsive"
                />
                <p>{project.title}</p>
              </figure>
            </div>
          ))}
        </section>
        <Modal
          show={showModal}
          onClose={onCloseModal}
          project={selectedProject}
        />
      </main>
    </>
  );
}
