
const API_KEY    = `AIzaSyBVAnGGcC1gB9A0H5rcvs-9nD_hfbRh-Tg`;
const BASE_URL   = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=`;
const ERROR_MSGS = {
    NO_SEARCH_TERM: 'Need a search term!!',
    NO_RESULTS    : "I didn't find any results"
}

const mock = {
    "kind": "books#volumes",
    "totalItems": 313,
    "items": [
        {
            "kind": "books#volume",
            "id": "4RChxt67lvwC",
            "etag": "RlJZHB8JZS0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/4RChxt67lvwC",
            "volumeInfo": {
                "title": "JavaScript",
                "subtitle": "The Definitive Guide",
                "authors": [
                    "David Flanagan"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2011-04-25",
                "description": "A revised and updated edition offers comprehensive coverage of ECMAScript 5 (the new JavaScript language standard) and also the new APIs introduced in HTML5, with chapters on functions and classes completely rewritten and updated to match current best practices and a new chapter on language extensions and subsets. Original.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780596805524"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0596805527"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 1078,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.7.2.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=4RChxt67lvwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=4RChxt67lvwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=4RChxt67lvwC&printsec=frontcover&dq=javascript&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=4RChxt67lvwC&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript.html?hl=&id=4RChxt67lvwC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=4RChxt67lvwC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "A revised and updated edition offers comprehensive coverage of ECMAScript 5 (the new JavaScript language standard) and also the new APIs introduced in HTML5, with chapters on functions and classes completely rewritten and updated to match ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "71nDBQAAQBAJ",
            "etag": "NllLnIRFmqM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/71nDBQAAQBAJ",
            "volumeInfo": {
                "title": "JavaScript for Kids",
                "subtitle": "A Playful Introduction to Programming",
                "authors": [
                    "Nick Morgan"
                ],
                "publisher": "No Starch Press",
                "publishedDate": "2014-12-14",
                "description": "JavaScript for Kids is a lighthearted introduction that teaches programming essentials through patient, step-by-step examples paired with funny illustrations. You’ll begin with the basics, like working with strings, arrays, and loops, and then move on to more advanced topics, like building interactivity with jQuery and drawing graphics with Canvas. Along the way, you’ll write games such as Find the Buried Treasure, Hangman, and Snake. You’ll also learn how to: Create functions to organize and reuse your codeWrite and modify HTML to create dynamic web pagesUse the DOM and jQuery to make your web pages react to user inputUse the Canvas element to draw and animate graphicsProgram real user-controlled games with collision detection and score keeping With visual examples like bouncing balls, animated bees, and racing cars, you can really see what you’re programming. Each chapter builds on the last, and programming challenges at the end of each chapter will stretch your brain and inspire your own amazing programs. Make something cool with JavaScript today! Ages 10+ (and their parents!)",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781593274085"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1593274084"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 336,
                "printType": "BOOK",
                "categories": [
                    "Juvenile Nonfiction"
                ],
                "averageRating": 4.5,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.1.1.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=71nDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=71nDBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=71nDBQAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=71nDBQAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_for_Kids.html?hl=&id=71nDBQAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=71nDBQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "JavaScript for Kids is a lighthearted introduction that teaches programming essentials through patient, step-by-step examples paired with funny illustrations."
            }
        },
        {
            "kind": "books#volume",
            "id": "MhNhBgAAQBAJ",
            "etag": "ArTScB4rPA8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MhNhBgAAQBAJ",
            "volumeInfo": {
                "title": "Coding with JavaScript For Dummies",
                "authors": [
                    "Dummies"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2015-05-11",
                "description": "Everybody needs to know a little about coding. Whether you're starting from scratch with no coding experience or need to add JavaScript knowledge to your tool set, Coding with JavaScript For Dummies helps you get the job done. The book assumes no prior coding knowledge as it walks you through the basics of JavaScript syntax, applications, and language. Along the way you'll try out some practical application of JavaScript, including creating interactive web elements and basic applications, thanks to the online exercises created by Codecademy.com. This book covers: - The basics of JavaScript, including what it does, how it works, and where it works - Introductions to the core elements of JavaScript - Ways to apply JavaScript to a web project - JavaScript's role in application development",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781119056072"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1119056071"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 384,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 4,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.7.1.0.preview.1",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MhNhBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MhNhBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=MhNhBgAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=MhNhBgAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Coding_with_JavaScript_For_Dummies.html?hl=&id=MhNhBgAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MhNhBgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "No experience? No problem! This friendly guide starts from the very beginning and walks you through the basics, then shows you how to apply what you&#39;ve learned to real projects."
            }
        },
        {
            "kind": "books#volume",
            "id": "-i3rDwAAQBAJ",
            "etag": "iu6VXTAni3M",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/-i3rDwAAQBAJ",
            "volumeInfo": {
                "title": "JavaScript",
                "subtitle": "The New Toys",
                "authors": [
                    "T. J. Crowder"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2020-07-28",
                "description": "All of JavaScript's newest features, in depth, made easy to understand. JavaScript is a rapidly changing language and it can be challenging to keep up with all the new toys being added. JavaScript: The New Toys explores the newest features of the world's most popular programming language while also showing readers how to track what's coming next. After setting the stage by covering who manages the process of improving JavaScript, how new features get introduced, terminology, and a high-level overview of new features, it details each new or updated item in depth, with example uses, possible pitfalls, and expert recommendations for updating old habits in light of new features. JavaScript: The New Toys: Covers all the additions to JavaScript in ES2015-ES2019 plus a preview of ES2020 (and beyond) Explores the latest syntax: nullish coalescing, optional chaining, let and const, class syntax, private methods, private fields, new.target, numeric separators, BigInt, destructuring, default parameters, arrow functions, async functions, await, generator functions, ... (rest and spread), template literals, binary and octal literals, ** (exponentiation), computed property/method names, for-of, for-await-of, shorthand properties, and others Details the new features and patterns including modules, promises, iteration, generators, Symbol, Proxy, reflection, typed arrays, Atomics, shared memory, WeakMap, WeakSet, and more Highlights common pitfalls and explains how to avoid them Shows how to follow the improvements process and even participate in the process yourself Explains how to use new features even before they're widely supported With its comprehensive coverage and friendly, accessible style, JavaScript: The New Toys provides an invaluable resource for programmers everywhere, whether they work in web development, Node.js, Electron, Windows Universal Apps, or another JavaScript environment.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781119367956"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1119367956"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 260,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.2.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=-i3rDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=-i3rDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=-i3rDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=-i3rDwAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript.html?hl=&id=-i3rDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=-i3rDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book explores the newest features of the world&#39;s most popular programming language while also showing readers how to track what&#39;s coming next."
            }
        },
        {
            "kind": "books#volume",
            "id": "nBuA0hmspdMC",
            "etag": "fqL4X/aCsGw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
                "authors": [
                    "David Herman"
                ],
                "publisher": "Addison-Wesley",
                "publishedDate": "2012-11-26",
                "description": "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780132902250"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0132902257"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 240,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.7.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=javascript&hl=&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "os8cEAAAQBAJ",
            "etag": "8AqOGugkFxc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/os8cEAAAQBAJ",
            "volumeInfo": {
                "title": "The Joy of JavaScript",
                "authors": [
                    "Luis Atencio"
                ],
                "publisher": "Manning Publications",
                "publishedDate": "2021-03-02",
                "description": "Whether for building interactive browser-based applications or creating server-side applications in Node, JavaScript is the most widely used language for web programming. With new features, language improvements, paradigms, and potential use cases appearing regularly, there's never been a more exciting time to be a JavaScript developer. In The Joy of JavaScript, author and JavaScript expert Luis Atencio teaches you key design concepts that lead to clean, lean, modular, and easy-to-maintain code. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781617295867"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1617295868"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 325,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=os8cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=os8cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=os8cEAAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=6&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=os8cEAAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_Joy_of_JavaScript.html?hl=&id=os8cEAAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=os8cEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications."
            }
        },
        {
            "kind": "books#volume",
            "id": "bzekBgAAQBAJ",
            "etag": "7EeySDaQuHM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/bzekBgAAQBAJ",
            "volumeInfo": {
                "title": "Beginning JavaScript",
                "authors": [
                    "Jeremy McPeak"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2015-02-17",
                "description": "The bestselling JavaScript guide, updated with current features and best practices Beginning JavaScript 5th Edition shows you how to work effectively with JavaScript frameworks, functions, and modern browsers, and teaches more effective coding practices using HTML5. This new edition has been extensively updated to reflect the way JavaScript is most commonly used today, introducing you to the latest tools and techniques available to JavaScript developers. Coverage includes modern coding practices using HTML5 markup, the JSON data format, DOM APIs, the jQuery framework, and more. Exercises with solutions provide plenty of opportunity to practice, and the companion website offers downloadable code for all examples given in the book. Learn JavaScript using the most up to date coding style Understand JSON, functions, events, and feature detection Utilize the new HTML5 elements and the related API Explore new features including geolocation, local storage, and more JavaScript has shaped the Web from a passive medium into one that is rich, dynamic, and interactive. No matter the technology on the server side, it's JavaScript that makes it come alive in the browser. To learn JavaScript the way it's used today, Beginning JavaScript, 5th Edition is your concise guide.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781118903438"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1118903439"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 768,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.8.3.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=bzekBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=bzekBgAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=7&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=bzekBgAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Beginning_JavaScript.html?hl=&id=bzekBgAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Beginning_JavaScript-sample-pdf.acsm?id=bzekBgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=bzekBgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The bestselling JavaScript guide, updated with current features and best practices Beginning JavaScript 5th Edition shows you how to work effectively with JavaScript frameworks, functions, and modern browsers, and teaches more effective ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "3GOuDwAAQBAJ",
            "etag": "uK/mgzgHEdc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/3GOuDwAAQBAJ",
            "volumeInfo": {
                "title": "Professional JavaScript for Web Developers",
                "authors": [
                    "Matt Frisbie"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2019-10-15",
                "description": "Update your skill set for ES 6 and 7 with the ultimate JavaScript guide for pros Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. From JavaScript-specific object-oriented programming and inheritance, to combining JavaScript with HTML and other markup languages, expert instruction walks you through the fundamentals and beyond. This new fourth edition has been updated to cover ECMAScript 6 and 7 (also known as ES2015 and ES2016) and the major re-imagination and departure from ES 5.1; new frameworks and libraries, new techniques, new testing tools, and more are explained in detail for the professional developer, with a practical focus that helps you put your new skills to work on real-world projects. The latest—and most dramatic—ES release is already being incorporated into JavaScript engines in major browsers; this, coupled with the rise in mobile web traffic increasing demand for responsive, dynamic web design, means that all web developers need to update their skills—and this book is your ideal resource for quick, relevant guidance. Get up to date with ECMAScript 6 and 7, new frameworks, and new libraries Delve into web animation, emerging APIs, and build systems Test more effectively with mocks, unit tests, functional tests, and other tools Plan your builds for future ES releases Even if you think you know JavaScript, new ES releases bring big changes that will affect the way you work. For a professional-level update that doesn't waste time on coding fundamentals, Professional JavaScript for Web Developers is the ultimate resource to bring you up to speed.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781119366447"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1119366445"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 1200,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.7.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=3GOuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=3GOuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=3GOuDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=3GOuDwAAQBAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Professional_JavaScript_for_Web_Develope.html?hl=&id=3GOuDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=3GOuDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer."
            }
        },
        {
            "kind": "books#volume",
            "id": "axtLzQEACAAJ",
            "etag": "R/ERVnoNyW4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/axtLzQEACAAJ",
            "volumeInfo": {
                "title": "Clean Code in JavaScript",
                "subtitle": "Develop Reliable, Maintainable, and Robust JavaScript",
                "authors": [
                    "James Padolsey"
                ],
                "publishedDate": "2020-01-17",
                "description": "Get the most out of JavaScript for building web applications through a series of patterns, techniques, and case studies for clean coding Key Features Write maintainable JS code using internal abstraction, well-written tests, and well-documented code Understand the agents of clean coding like SOLID principles, OOP, and functional programming Explore solutions to tackle common JavaScript challenges in building UIs, managing APIs, and writing states Book Description Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community. The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You'll then delve into JavaScript, understanding the more complex aspects of the language. Next, you'll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You'll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you'll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding. By the end of this book, you'll be well-versed with JavaScript and have learned how to create clean abstractions, test them, and communicate about them via documentation. What you will learn Understand the true purpose of code and the problems it solves for your end-users and colleagues Discover the tenets and enemies of clean code considering the effects of cultural and syntactic conventions Use modern JavaScript syntax and design patterns to craft intuitive abstractions Maintain code quality within your team via wise adoption of tooling and advocating best practices Learn the modern ecosystem of JavaScript and its challenges like DOM reconciliation and state management Express the behavior of your code both within tests and via various forms of documentation Who this book is for This book is for anyone who writes JavaScript, professionally or otherwise. As this book does not relate specifically to any particular framework or environment, no prior experience of any JavaScript web framework is required. Some knowledge of programming is assumed to understand the concepts covered in the book more effectively.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1789957648"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781789957648"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 548,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=axtLzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=axtLzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=axtLzQEACAAJ&dq=javascript&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=axtLzQEACAAJ&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Clean_Code_in_JavaScript.html?hl=&id=axtLzQEACAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=axtLzQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "In this book, you&#39;ll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code."
            }
        },
        {
            "kind": "books#volume",
            "id": "GgJN2CC_2s4C",
            "etag": "mLAMG63Rg1g",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/GgJN2CC_2s4C",
            "volumeInfo": {
                "title": "Pro JavaScript Techniques",
                "authors": [
                    "John Resig"
                ],
                "publisher": "Apress",
                "publishedDate": "2007-05-02",
                "description": "This book addresses today’s approach to JavaScript in detail: modern browser support, including information on Internet Explorer 7; Object-Oriented JavaScript; testing and debugging; unobtrusive JavaScript techniques using DOM Scripting; Ajax; creating and using blocks of reusable code, and the future of JavaScript. All the concepts expressed in this up-to-the-minute reference are thoroughly backed up with real world examples and full-scale case studies. The book offers reusable functions for readers to use in their own projects, a significant time-saver. Also included are several reference sections that allow developers to look up details quickly and easily.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1430202831"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781430202837"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 384,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 4,
                "ratingsCount": 20,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.3.3.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=GgJN2CC_2s4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=GgJN2CC_2s4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=GgJN2CC_2s4C&printsec=frontcover&dq=javascript&hl=&cd=10&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=GgJN2CC_2s4C&dq=javascript&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Pro_JavaScript_Techniques.html?hl=&id=GgJN2CC_2s4C"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Pro_JavaScript_Techniques-sample-epub.acsm?id=GgJN2CC_2s4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Pro_JavaScript_Techniques-sample-pdf.acsm?id=GgJN2CC_2s4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=GgJN2CC_2s4C&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book addresses today’s approach to JavaScript in detail: modern browser support, including information on Internet Explorer 7; Object-Oriented JavaScript; testing and debugging; unobtrusive JavaScript techniques using DOM Scripting; ..."
            }
        }
    ]
}

window.addEventListener('load', () => {
    // populateBookCards(mock.items);
})

function populateBookCards(books) {
    const cardList = document.getElementById('main');

    const template = document.getElementById('cardTemp').content;
    books.forEach(book => {
        const copyTemp = document.importNode(template, true);
        copyTemp.querySelector('img').setAttribute('src', book.volumeInfo.imageLinks.thumbnail);
        let fullTitle = book.volumeInfo.subtitle ? `${book.volumeInfo.title} - ${book.volumeInfo.subtitle}` : book.volumeInfo.title;
        if (fullTitle.length > 70) {
            fullTitle = fullTitle.substring(0,70) + '...';
        }
        copyTemp.querySelector('.book-name').textContent = fullTitle;
        if (book.volumeInfo.authors) {
            copyTemp.querySelector('.by i').textContent = 'by';
            copyTemp.querySelector('.book-author').textContent = `${book.volumeInfo.authors.join(' ,')}`;
        }

        cardList.appendChild(copyTemp);
    });
}


function removeBookResults() {
    document.querySelector('#main').innerHTML = '';
}

async function searchBooks() {
    const searchTerm = document.querySelector('#searchTerm').value;
    const dangerMsgDiv = document.querySelector('.danger');

    if (searchTerm) {
        dangerMsgDiv.style.display = 'none';
        removeBookResults();

        const data  = await fetch(BASE_URL + searchTerm);
        const books = await data.json();
        if (books.items && books.items.length > 0) {
            populateBookCards(books.items);
        }
    }
    else {
        dangerMsgDiv.style.display = 'block';
        setTimeout(() => dangerMsgDiv.style.display = 'none', 3000);

    }
}

