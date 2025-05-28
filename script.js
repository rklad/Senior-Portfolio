function scrollToNext() {
            // Get the current scroll position
            const currentPosition = window.pageYOffset;
            
            // Get the viewport height
            const viewportHeight = window.innerHeight;
            
            // Calculate the next section position (current position + viewport height)
            const nextPosition = currentPosition + viewportHeight;
            
            // Smooth scroll to the next section
            window.scrollTo({
                top: nextPosition,
                behavior: 'smooth'
            });
        }