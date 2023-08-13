/* Circular progress bar - A canvas animation script by Renato Lins */

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
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);
    context.lineWidth = lineWidth;
    context.strokeStyle = gradient;
    context.lineCap = 'round';
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + 2 * Math.PI * (percentage / 100);

    // Animation configuration
    const fillStep = 1; // Adjust this value for smoother or more abrupt filling
    const isBouncingAnimationEnabled = percentage >= 5 && percentage < 95;
    let bounceDirection = 1;
    let currentAngle = startAngle;
    const animationDuration = 290 - percentage * 2; // Duration in milliseconds
    let isAnimationActive = true;
    let bounceCount = 0;
    let lastTimestamp = null;

    // Function to draw/animate the progress bar
    const animateProgress = timestamp => {
      // Smoothing animation regardless of frame rate
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Clear and redraw the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(centerX, centerY, radius, startAngle, currentAngle);
      context.stroke();

      // Calculate next animation position
      currentAngle +=
        (fillStep * bounceDirection * (deltaTime || 1000 / 60)) /
        animationDuration;

      // Bounce animation logic
      if (isBouncingAnimationEnabled) {
        if (currentAngle >= endAngle + 0.14) {
          bounceCount++;
          bounceDirection = -1;
        }

        if (currentAngle <= endAngle - 0.12 && bounceCount > 0) {
          bounceCount++;
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
