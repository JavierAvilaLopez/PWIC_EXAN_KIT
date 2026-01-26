import React from "react";
import Greeting from "../basics/Greeting";
import TaskList from "../basics/TaskList";
import Counter from "../basics/Counter";
import Toggle from "../basics/Toggle";
import ProfileCard from "../basics/ProfileCard";
import Clock from "../effects/Clock";
import PostList from "../effects/PostList";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import LoginState from "../conditionals/LoginState";
import TrafficLight from "../conditionals/TrafficLight";
import ThemeToggle from "../conditionals/ThemeToggle";
import UserCards from "../api/UserCards";
import BootstrapForm from "../bootstrap/BootstrapForm";
import BootstrapCard from "../bootstrap/BootstrapCard";
import ResponsiveGrid from "../bootstrap/ResponsiveGrid";
import ModalForm from "../bootstrap/ModalForm";

// Página principal con ejemplos prácticos de cada unidad.
const Home = () => {
  const tasks = [
    { id: 1, title: "Repasar componentes" },
    { id: 2, title: "Practicar hooks" },
    { id: 3, title: "Consumir APIs" },
  ];

  return (
    <div className="container py-4">
      <section className="mb-5">
        <h1 className="mb-3">React Exam Kit</h1>
        <p className="lead">
          Este repositorio contiene ejemplos prácticos para preparar el examen de React,
          Bootstrap y peticiones AJAX.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Fundamentos de React</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <Greeting name="María" />
          </div>
          <div className="col-md-6">
            <TaskList tasks={tasks} />
          </div>
          <div className="col-md-6">
            <Counter />
          </div>
          <div className="col-md-6">
            <Toggle />
          </div>
          <div className="col-md-6">
            <ProfileCard
              name="Lucía López"
              age={22}
              image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Hooks y efectos</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <Clock />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Formularios y validación</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <LoginForm />
          </div>
          <div className="col-md-6">
            <RegisterForm />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Renderizado condicional</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <LoginState />
          </div>
          <div className="col-md-4">
            <TrafficLight />
          </div>
          <div className="col-md-4">
            <ThemeToggle />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">API con Fetch y Axios</h2>
        <UserCards />
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Bootstrap</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <BootstrapForm />
          </div>
          <div className="col-md-6">
            <BootstrapCard />
          </div>
          <div className="col-12">
            <ResponsiveGrid />
          </div>
          <div className="col-12">
            <ModalForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
