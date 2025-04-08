
const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          Using our calculators is simple and straightforward. Follow these easy steps:
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Step line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2">Choose a Calculator</h3>
                  <p className="text-muted-foreground">
                    Browse our collection of calculators and select the one that matches your needs.
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10 order-1 md:order-2">
                  1
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10 order-1">
                  2
                </div>
                <div className="md:w-1/2 order-2">
                  <h3 className="text-xl font-semibold mb-2">Enter Your Data</h3>
                  <p className="text-muted-foreground">
                    Input your values into the provided fields. Our interface guides you on what to enter.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2">Get Instant Results</h3>
                  <p className="text-muted-foreground">
                    Click the calculate button and receive your results instantly, with explanations where needed.
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10 order-1 md:order-2">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
