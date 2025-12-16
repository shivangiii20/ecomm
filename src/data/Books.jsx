const Books = {
  "0-100": [
    {
      id: "book-1",
      name: "Atomic Habits",
      price: 15,
      rating: 4.5,
      brand: "James Clear",
      // Instead of add a new key (author) in Products.jsx currently we have made a change here from "author" to "brand"
      availability: "In Stock",
      description:
        "Atomic Habits by James Clear shows how small, consistent habits lead to meaningful and lasting success.",
      images: ["/images/books/atomic.jpg"],
    },
    {
      id: "book-2",
      name: "1984",
      price: 8,
      rating: 4.7,
      brand: "George Orwell",
      availability: "In Stock",
      description:
        "A classic dystopian novel that examines authoritarian power, mass surveillance, and the suppression of individual freedom in a tightly controlled society.",
      images: ["/images/books/1984.jpg"],
    },

    {
      id: "book-3",
      name: "Think and Grow Rich",
      price: 16.41,
      rating: 4,
      brand: "Napoleon Hill",
      availability: "In Stock",
      description:
        "A timeless personal development book that focuses on mindset, goal-setting, and disciplined thinking as the foundation for financial and personal success.",
      images: ["/images/books/TAGR.png"],
    },

    {
      id: "book-4",
      name: "To Kill a Mockingbird",
      price: 22,
      rating: 3,
      brand: "Harper Lee",
      availability: "In Stock",
      description:
        "A powerful literary classic that explores racial injustice, moral growth, and compassion through the eyes of a young girl in the American South.",
      images: ["/images/books/TKAMB.png"],
    },

    {
      id: "book-5",
      name: "The Hobbit",
      price: 22,
      rating: 4,
      brand: "J.R.R. Tolkien",
      availability: "Out of Stock",
      description:
        "A classic fantasy adventure that follows an ordinary hero on a journey filled with courage, friendship, and discovery.",
      images: ["/images/books/hobbit.jpg"],
    },

    {
      id: "book-6",
      name: "The Psychology of Money",
      price: 37.12,
      rating: 4.6,
      brand: "Morgan Housel",
      availability: "In Stock",
      description:
        "A practical finance book that explains how human behavior and mindset influence financial decisions and long-term wealth.",
      images: ["/images/books/morgan.jpg"],
    },

    {
      id: "book-7",
      name: "The Little Prince",
      price: 53.1,
      rating: 4.5,
      brand: "Antoine de Saint-Exupéry",
      availability: "In Stock",
      description:
        "A timeless philosophical tale that explores love, loneliness, and the true meaning of life through a child’s perspective.",
      images: ["/images/books/littleprince.jpg"],
    },

    {
      id: "book-8",
      name: "How to Win Friends & Influence People",
      price: 23.1,
      rating: 4,
      brand: "Dale Carnegie",
      availability: "In Stock",
      description:
        "A classic self-improvement guide that teaches effective communication, leadership, and relationship-building skills.",
      images: ["/images/books/dalecarnegie.jpg"],
    },
  ],

  "101-200": [
    {
      id: "book-9",
      name: "Harry Potter Complete Box Set (Hardcover)",
      price: 120,
      rating: 4.9,
      brand: "J.K. Rowling",
      availability: "In Stock",
      description:
        "A complete hardcover collection of the magical fantasy series, following friendship, courage, and the battle between good and evil across an epic wizarding journey.",
      images: [
        "/images/books/harrypotterfull.jpg",
        "/images/books/harrypotter1.jpg",
      ],
    },
    {
      id: "book-10",
      name: "A Song of Ice and Fire Box Set",
      price: 135,
      rating: 4.8,
      brand: "George R.R. Martin",
      availability: "Out of Stock",
      description:
        "An epic fantasy box set featuring political intrigue, power struggles, and legendary battles set in a richly detailed world.",
      images: ["/images/books/RRmartin.jpg", "/images/books/RRmartin1.jpg"],
    },
    {
      id: "book-11",
      name: "Marvel Encyclopedia (Hardcover Deluxe)",
      price: 123,
      rating: 4.1,
      brand: "DK / Marvel",
      availability: "In Stock",
      description:
        "A deluxe illustrated reference guide covering Marvel’s iconic characters, teams, storylines, and legendary moments.",
      images: ["/images/books/marvel.jpg", "/images/books/marvel1.jpg"],
    },

    {
      id: "book-12",
      name: "Sherlock Holmes Complete Collection (Hardcover)",
      price: 189,
      rating: 4.9,
      brand: "Arthur Conan Doyle",
      availability: "In Stock",
      description:
        "A complete hardcover collection of classic detective stories featuring brilliant investigations, sharp logic, and timeless mysteries.",
      images: ["/images/books/sherlock.jpg"],
    },

    {
      id: "book-13",
      name: "Percy Jackson Complete Series Box Set",
      price: 157.11,
      rating: 4.3,
      brand: "Rick Riordan",
      availability: "In Stock",
      description: "",
      images: ["/images/books/percyjackson.jpg"],
    },

    {
      id: "book-14",
      name: "Game of Thrones Illustrated Edition",
      price: 177.17,
      rating: 4.3,
      brand: "George R.R. Martin",
      availability: "In Stock",
      description:
        "A complete fantasy adventure series blending Greek mythology with action, humor, and the journey of a modern young hero.",
      images: ["/images/books/gameofthrones.jpg"],
    },
  ],

  "201-300": [
    {
      id: "book-15",
      name: "The Lord of the Rings Deluxe Illustrated Edition",
      price: 215,
      rating: 4.7,
      brand: "J.R.R. Tolkien",
      availability: "In Stock",
      description:
        "A deluxe illustrated fantasy epic showcasing an unforgettable journey of heroism, friendship, and the struggle between good and evil.",
      images: ["/images/books/lordofrings.jpg"],
    },
    {
      id: "book-16",
      name: "The Chronicles of Narnia Collector’s Edition",
      price: 274,
      rating: 4.3,
      brand: "C.S. Lewis",
      availability: "Out of Stock",
      description:
        "A collector’s edition fantasy classic featuring magical worlds, heroic adventures, and timeless themes of courage and faith.",
      images: ["/images/books/narnia.jpg"],
    },

    {
      id: "book-17",
      name: "DC Comics Absolute Edition Collection",
      price: 244.23,
      rating: 4.3,
      brand: "Various Authors (DC)",
      availability: "In Stock",
      description:
        "A premium hardcover collection presenting iconic DC stories with stunning artwork, definitive narratives, and collector-quality presentation.",
      images: ["/images/books/dccomics.jpg"],
    },

    {
      id: "book-18",
      name: "National Geographic Collector’s Edition",
      price: 262.23,
      rating: 4.3,
      brand: "National Geographic",
      availability: "In Stock",
      description:
        "A premium collector’s edition featuring in-depth stories, stunning photography, and authoritative insights on nature, science, and world cultures.",
      images: ["/images/books/geographic.jpg"],
    },

    {
      id: "book-19",
      name: "Tolkien Illustrated Middle-earth Collection",
      price: 297.23,
      rating: 4.7,
      brand: "J.R.R. Tolkien",
      availability: "In Stock",
      description:
        "A beautifully illustrated collection exploring the rich mythology, landscapes, and legendary tales of Middle-earth.",
      images: ["/images/books/tolkins.jpg"],
    },
  ],

  "301-400": [
    {
      id: "book-20",
      name: "Harry Potter Leather-Bound Collector’s Set",
      price: 321,
      rating: 4.9,
      brand: "J.K. Rowling",
      availability: "In Stock",
      description:
        "A premium leather-bound collector’s set presenting the complete magical saga with elegant design and timeless storytelling.",
      images: [
        "/images/books/harrypotterdeluxe.jpg",
        "/images/books/harrypotterdeluxe1.jpg",
      ],
    },
    {
      id: "book-21",
      name: "Leonardo da Vinci",
      price: 348,
      rating: 4.8,
      brand: "Frank Zöllner",
      availability: "In Stock",
      descriptio:
        "An insightful exploration of the life and genius of a visionary artist, inventor, and pioneer who shaped art, science, and human creativity.",
      images: ["/images/books/vinci.jpg"],
    },

    {
      id: "book-22",
      name: "SUMO (Revised Edition)",
      price: 327,
      rating: 4,
      brand: "Helmut Newton",
      availability: "In Stock",
      descriptio:
        "A motivational guide that focuses on mindset, accountability, and practical strategies to overcome challenges and achieve personal success.",
      images: ["/images/books/sumo.jpg"],
    },

    {
      id: "book-23",
      name: "400 Photographs",
      price: 366,
      rating: 4.6,
      brand: "Ansel Adams",
      availability: "In Stock",
      descriptio:
        "A visually rich photography collection showcasing iconic images that capture history, culture, and human moments in stunning detail.",
      images: ["/images/books/400.jpg"],
    },

    {
      id: "book-24",
      name: "The Norton Facsimile",
      price: 389,
      rating: 4.3,
      brand: "William Shakespeare",
      availability: "In Stock",
      descriptio:
        "A high-quality facsimile edition that faithfully reproduces an original manuscript, offering historical authenticity and scholarly value.",
      images: ["/images/books/folio.jpg"],
    },
  ],

  "401-500": [
    {
      id: "book-25",
      name: "The Mural Project (Limited Edition)",
      price: 420,
      rating: 4.6,
      brand: "Ansel Adams",
      availability: "Out of Stock",
      description:
        "A limited edition art book documenting a large-scale mural project, highlighting creative process, visual storytelling, and cultural impact.",
      images: ["/images/books/mural.jpg"],
    },
    {
      id: "book-26",
      name: "The Golden Age (Omnibus Edition)",
      price: 456,
      rating: 4.4,
      brand: "Stan Lee (Marvel)",
      availability: "In Stock",
      description:
        "An omnibus edition that brings together classic works from a defining era, celebrating influential stories, themes, and timeless creativity.",
      images: ["/images/books/goldenage1.jpg", "/images/books/goldenage2.jpg"],
    },

    {
      id: "book-27",
      name: "The Silmarillion",
      price: 496,
      rating: 4.8,
      brand: "J.R.R. Tolkien",
      availability: "In Stock",
      description:
        "A mythological fantasy epic that explores the ancient history, legends, and creation of a richly imagined world.",
      images: ["/images/books/tolkins1.jpg"],
    },
  ],

  "501-600": [
    {
      id: "book-28",
      name: "A Book of Ryhmes (historic)",
      price: 548,
      rating: 4.7,
      brand: "Charlotte Brontë",
      availability: "In Stock",
      description:
        "A historic poetry collection featuring traditional rhymes that reflect the language, culture, and storytelling of an earlier era.",
      images: ["/images/books/rhymes.jpg"],
    },
  ],
};

export default Books;
