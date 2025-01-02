import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface Blog {
    id?: number;
    title?: string;
    slug?: string;
    blog_photo?: string;
    short_description?: string;
    text?: string;
    save_type?: string;
    author?: number;
    created?: Date;
    modified?: Date;
    is_delete?: boolean;
}



interface PropsAttr {
    blog: Blog,
    is_single :boolean
}

export const BlogCard = (props: PropsAttr) => {
    const { blog } = props;
    const { is_single } = props;
    if (is_single) {
        return (
            <tr>
                <td>
                    <img src={blog.blog_photo} alt={blog.title} width="100" />
                </td>
                <td>{blog.title}</td>
                <td>{blog.short_description}</td>
                <td>{blog.author}</td>
                <td>{blog.created?.toLocaleDateString()}</td>
                <td>{blog.save_type}</td>
                <td>{blog.modified?.toLocaleDateString()}</td>
                <td>{blog.is_delete ? 'Yes' : 'No'}</td>
            </tr>
        );
    }
    return (
        <tr>
            <td>
                <img src={blog.blog_photo} alt={blog.title} width="100" />
            </td>
            <td>{blog.title}</td>
            <td>{blog.short_description}</td>
            <td>{blog.author}</td>
            <td>{blog.created?.toLocaleDateString()}</td>
            <td>{blog.save_type}</td>
            <td>{blog.modified?.toLocaleDateString()}</td>
            <td>{blog.is_delete ? 'Yes' : 'No'}</td>
            <td><Link to={"/blogs/" + blog.id}><h2 style={{fontSize:15}}>نمایش بلاگ</h2></Link></td>
        </tr>
    );
};