export default function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Security", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookies", "Compliance"],
    Community: ["Forum", "Discord", "Twitter", "GitHub"],
  };

  return (
    <footer className="bg-secondary/5 border-t border-border w-full">
      <div className=" mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-black mb-4">ConsensusFlow</h3>
            <p className="text-sm text-gray-600">
              Evidence-driven truth for a more informed world.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-black mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-gray-700 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-900">
            © 2025 ConsensusFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
