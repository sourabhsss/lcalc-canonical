
interface CategoryExample {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
}

interface CategoriesSectionProps {
  categories: CategoryExample[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Calculator Categories</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          We offer calculators across various categories to meet all your calculation needs, from basic math to specialized topics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="space-y-2">
                <p className="font-medium">Popular in this category:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {category.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
