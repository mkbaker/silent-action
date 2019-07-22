import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        <h1>Welcome to Silent Action.</h1>
        <p>
          Silent Action is a community-based platform to raise funds for persons
          in your community facing medical expenses. Easily start a new auction
          with these steps:
        </p>

        <ol>
          <li>Create an account. </li>
          <li>Create an auction. We'll help walk you through the steps.</li>
          <li>Invite friends and family to participate.</li>
          <li>All proceeds go to the beneficiary.</li>
        </ol>
      </p>
    </div>
  </div>
);

export default AboutPage;
