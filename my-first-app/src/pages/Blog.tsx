import { useParams } from 'react-router-dom';
import { products, ProductCard } from '../components/Product';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { Blog, BlogCard } from "../components/SingleBlog"


const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        api.get("/blogs/")
            .then((response) => {
                const blogs = response.data.map((blog: Blog) => ({
                    ...blog,
                    created: blog.created ? new Date(blog.created) : undefined,
                    modified: blog.modified ? new Date(blog.modified) : undefined
                }));
                setBlogs(blogs);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Short Description</th>
                    <th>Author</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} is_single={false}/>
                ))}
            </tbody>
        </table>
    );
};

export const SingleBlogs = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        if (id) {
            const blogId = parseInt(id, 10);
            if (!isNaN(blogId)) {
                api.get(`/blogs/${blogId}`)
                    .then((response) => {
                        const fetchedBlog = {
                            ...response.data,
                            created: response.data.created ? new Date(response.data.created) : undefined,
                            modified: response.data.modified ? new Date(response.data.modified) : undefined
                        };
                        setBlog(fetchedBlog);
                    })
                    .catch((error) => {
                        console.error("Error fetching blog:", error);
                    });
            }
        }
    }, [id]);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Short Description</th>
                    <th>Author</th>
                    <th>Created</th>
                    <th>Save Type</th>
                    <th>Modified</th>
                    <th>Is Delete</th>
                </tr>
            </thead>
            <tbody>
                <BlogCard key={blog.id} blog={blog} is_single={true}/>
            </tbody>
        </table>
    );
};

export default Blogs