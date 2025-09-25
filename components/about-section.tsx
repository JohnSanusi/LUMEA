export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              Crafting experiences that inspire
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Lumea represents a new dimension of curated lifestyle products. We blend intricate design, considered
              function, and luxury materials to transform your everyday experiences.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Our carefully selected collections span fashion, accessories, and innovative gadgets, each piece chosen to
              awaken your senses and elevate your personal style.
            </p>
          </div>

          <div className="relative">
            <img
              src="/elegant-lifestyle-brand-aesthetic-with-warm-lighti.jpg"
              alt="About Lumea"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
