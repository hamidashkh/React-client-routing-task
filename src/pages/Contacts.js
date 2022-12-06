import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Contact with us!</h1>
      <p className="lead">
        Contact with using mail, phone and other social medias
      </p>
      <img src="https://source.unsplash.com/random/300x200?sig=3" alt="3" />
      <hr className="my-4" />
      <div>
        <Link path="">
          <p>934-493-33-34</p>
        </Link>
        <Link path="">
          <p>someone@gmail.com</p>
        </Link>
        <Link path="">
          <p>Linkedin</p>
        </Link>
      </div>
    </div>
  );
}
