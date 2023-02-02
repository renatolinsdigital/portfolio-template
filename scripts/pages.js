// Update data here
const name = 'John Doe';
const thingsIam = ['Front-end developer', 'Designer'];

// Pages content
export const pages = {
  home: `
<div class="container mx-auto p-4 mt-20">
  <h1 class="text-5xl font-bold text-center">${name}</h1>
  <p class="mt-2 text-lg leading-normal text-center">I am a ${thingsIam[0]} and a ${thingsIam[1]}</p>
</div>

  `,
  portfolio: `
    <h1>About Me</h1>
    <p>I am a full-stack web developer with a passion for creating beautiful and functional websites.</p>
    <p>I have experience in HTML, CSS, JavaScript, and several popular frameworks and libraries.</p>
  `,
  services: `
    <h1>My Services</h1>
    <ul>
      <li>Web Development</li>
      <li>UI/UX Design</li>
      <li>SEO Optimization</li>
    </ul>
  `,
  contact: `
    <h1>Contact Me</h1>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `
};