import './AnimatedButton.css';

const AnimatedButton = () => {
  return (
    <button type="button" className="animated-btn">
      <strong>GET STARTED</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default AnimatedButton;
