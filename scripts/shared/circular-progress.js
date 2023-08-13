/* Circular progress bar - A canvas animation script by Renato Lins */
import createSumFunction from '../helpers/closure-sum.js';

const circularProgress = () => {
  // Get theme colors from CSS theme variables
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue('--primary-color');
  const secondaryColor = rootStyles.getPropertyValue('--secondary-color');

  // Get all canvas elements with the class "circular-progress"
  const canvasList = document.querySelectorAll('canvas.circular-progress');

  // Function to start animation for each canvas
  const startAnimation = canvas => {
    // Get canvas rendering context and size
    const context = canvas.getContext('2d');
    const displaySize = Math.min(
      canvas.parentElement.offsetWidth,
      canvas.parentElement.offsetHeight
    );

    // Increase canvas resolution for smoother edges
    const canvasResolution = displaySize * 2.5;
    canvas.width = canvasResolution;
    canvas.height = canvasResolution;
    canvas.style.width = displaySize + 'px';
    canvas.style.height = displaySize + 'px';

    // Values for circular drawing
    const centerX = canvasResolution / 2;
    const centerY = canvasResolution / 2;
    const radius = Math.min(centerX, centerY) - 30;

    // General configuration
    const lineWidth = 30;
    const percentage = canvas.getAttribute('data-percentage') || 0;
    const gradient = context.createLinearGradient(
      0,
      0,
      canvasResolution,
      canvasResolution
    );
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    context.strokeStyle = gradient;
    const startAngle = -Math.PI / 2;
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);
    const endAngle = startAngle + 2 * Math.PI * (percentage / 100);

    // Animation configuration
    const fillStep = 1; // Adjust this value for smoother or more abrupt filling
    let bounceDirection = 1;
    let isAnimationActive = true;
    let currentAngle = startAngle;
    const delayedAnimationDuration = 1600; // Animation duration after the first bounce (slower)
    const animationDuration = 290 - percentage * 2; // Filling animation duration (the lower the faster)
    const isBouncingAnimationEnabled = percentage >= 5 && percentage < 95;

    let lastTimestamp = null;

    // Enables a bounce sum via closure so we can have multiple elements with
    // bouncing count without worrying about variable references
    const bounceSum = createSumFunction();

    // Function to draw/animate the progress bar
    const animateProgress = timestamp => {
      const bounceCount = bounceSum(0);

      // Smoothing animation regardless of frame rate
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Bounce animation logic
      if (isBouncingAnimationEnabled) {
        if (currentAngle >= endAngle + 0.14) {
          bounceSum(1);
          bounceDirection = -1;
        }

        if (currentAngle <= endAngle - 0.1 && bounceCount > 0) {
          bounceSum(1);
          bounceDirection = 1;
        }

        if (bounceCount >= 2 && currentAngle >= endAngle) {
          isAnimationActive = false;
        }
      } else {
        if (currentAngle >= endAngle) {
          isAnimationActive = false;
        }
      }

      // Clear and redraw the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(centerX, centerY, radius, startAngle, currentAngle);
      context.stroke();

      // Makes the animation slower after the first bounce
      const currentAnimationDuration =
        bounceCount > 0 ? delayedAnimationDuration : animationDuration;

      // Calculate next animation position
      currentAngle +=
        (fillStep * bounceDirection * (deltaTime || 1000 / 60)) /
        currentAnimationDuration;

      // Request next animation frame
      if (isAnimationActive) {
        requestAnimationFrame(animateProgress);
      }
    };

    // Start the animation
    animateProgress();
  };

  // Callback for canvas intersection with viewport
  const handleIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation(entry.target);
      }
    });
  };

  // Create an Intersection Observer for each canvas
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use viewport as root
    threshold: 1.0 // Fully visible
  });

  // Observe each canvas
  canvasList.forEach(canvas => {
    observer.observe(canvas);
  });
};

export default circularProgress;
