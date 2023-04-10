import Link from 'next/link';
import Image from "next/image";

const BlogList = () => {
  let posts = [
    {
      "id": 1,
      "title": "10 Tips for Creating a Successful Blog",
      "slug": "10-tips-for-creating-a-successful-blog",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-03-01",
      "author": {
        "name": "John Doe",
        "avatar": "https://example.com/john-doe-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for 10 Tips for Creating a Successful Blog"
      }
    },
    {
      "id": 2,
      "title": "How to Start a Blog in 5 Easy Steps",
      "slug": "how-to-start-a-blog-in-5-easy-steps",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-02-15",
      "author": {
        "name": "Jane Smith",
        "avatar": "https://example.com/jane-smith-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        },
        {
          "id": 2,
          "name": "How-to",
          "slug": "how-to"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for How to Start a Blog in 5 Easy Steps"
      }
    },
    {
      "id": 3,
      "title": "10 Tips for Creating a Successful Blog",
      "slug": "10-tips-for-creating-a-successful-blog",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-03-01",
      "author": {
        "name": "John Doe",
        "avatar": "https://example.com/john-doe-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for 10 Tips for Creating a Successful Blog"
      }
    },
    {
      "id": 4,
      "title": "How to Start a Blog in 5 Easy Steps",
      "slug": "how-to-start-a-blog-in-5-easy-steps",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-02-15",
      "author": {
        "name": "Jane Smith",
        "avatar": "https://example.com/jane-smith-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        },
        {
          "id": 2,
          "name": "How-to",
          "slug": "how-to"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for How to Start a Blog in 5 Easy Steps"
      }
    },
    {
      "id": 5,
      "title": "10 Tips for Creating a Successful Blog",
      "slug": "10-tips-for-creating-a-successful-blog",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-03-01",
      "author": {
        "name": "John Doe",
        "avatar": "https://example.com/john-doe-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for 10 Tips for Creating a Successful Blog"
      }
    },
    {
      "id": 6,
      "title": "How to Start a Blog in 5 Easy Steps",
      "slug": "how-to-start-a-blog-in-5-easy-steps",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus turpis auctor nisl semper, sed maximus purus venenatis.",
      "date": "2022-02-15",
      "author": {
        "name": "Jane Smith",
        "avatar": "https://example.com/jane-smith-avatar.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Blogging",
          "slug": "blogging"
        },
        {
          "id": 2,
          "name": "How-to",
          "slug": "how-to"
        }
      ],
      "featuredImage": {
        "url": "https://via.placeholder.com/600x400",
        "alt": "Featured image for How to Start a Blog in 5 Easy Steps"
      }
    },
  ]
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-white py-12">Latest Blog Posts</h2>
      <div className="container flex flex-wrap justify-center items-center mx-auto gap-8">
      {posts.map((post) => (
          
          <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
            <div className="flex max-w-sm gap-4 max-h-4xl">
            <a className="flex flex-col items-center gap-4 p-4 bg-dark-blue-900 rounded-md hover:bg-dark-blue-600">
              <Image src={post.featuredImage.url} alt={post.title} className="bject-cover rounded-md" />
              <div className="p-8">
                <h3 className="text-2xl font-extrabold text-white">{post.title}</h3>
                <p className="py-8">{post.excerpt}</p>
              </div>
            </a>
            </div>
          </Link>
        
      ))}
      </div>
    </div>
  );
};

export default BlogList;
