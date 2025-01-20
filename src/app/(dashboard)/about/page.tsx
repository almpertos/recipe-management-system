import Card from "@/app/components/Card";

const About = () => {
  return (
    // <div className="flex flex-wrap gap-4 justify-between">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card
        title="About"
        content="This program was created for educational purposes."
        urls={{
          repo: "https://github.com/almpertos/recipe-management-system",
        }}
      ></Card>
      <Card
        title="Developed by"
        content="Kesisefidis Efthymios-Almpertos"
        urls={{
          linkedin: "https://www.linkedin.com/in/almpertos-kesisefidis",
          github: "https://github.com/almpertos",
          facebook: "https://www.facebook.com/almpertoskesisefidis",
        }}
      ></Card>
      <Card
        title="Course"
        content="Software Engineering for Large-Scale
            Applications"
        urls={{
          course:
            "https://seima.ds.uth.gr/en/modules-full-en/software-engineering-for-large-scale-applications-en/",
        }}
      ></Card>
      <Card
        title="Master's Program"
        content="Software Engineering for Web and Mobile Applications"
        urls={{
          website: "https://seima.ds.uth.gr/en/home/",
        }}
      ></Card>

      <Card
        title="University"
        content="University of Thessaly"
        urls={{
          website: "https://www.uth.gr/en",
        }}
      ></Card>
      <Card title="Department" content="Digital Systems Department"></Card>
    </div>
  );
};

export default About;
