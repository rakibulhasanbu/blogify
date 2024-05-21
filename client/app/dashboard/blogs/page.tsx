'use client'

import AppModal from "@/app/components/ui/AppModal";
import AppTable from "@/app/components/ui/AppTable";
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/app/states/features/blogs/blogApi";
import { formatDate } from "@/app/utils/formateDate";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const Blogs = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")

    const queryString = useMemo(() => {
        const info = {
            role: "user",
            brand: "",
            limit: 10,
            page,
            searchTerm: search.length ? search : undefined,
        };
        const queryString = Object.keys(info).reduce((pre, key: string) => {
            const value = info[key as keyof typeof info];
            if (value) {
                return pre + `${Boolean(pre.length) ? "&" : ""}${key}=${value}`;
            }
            return pre;
        }, "");
        return queryString;
    }, [page, search]);

    const infoQuery = useGetBlogsQuery(queryString);

    const [deleteProduct, { isError, error, isLoading, isSuccess }] = useDeleteBlogMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Product delete unsuccessful!");
        } else if (!isLoading && isSuccess) {
            toast.success('Product deleted Successful!')
        }
    }, [isError, error, isLoading, isSuccess])

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            className: "min-w-[150px]",
            render: (name: string) => {
                return (
                    <p className="line-clamp-1">{name}</p>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            className: "min-w-[205px]",
            render: (description: string) => {
                return (
                    <p className="line-clamp-1">{description}</p>
                )
            }
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            className: "min-w-[115px]",
            render: (date: string) => {
                return (
                    <p className="line-clamp-1">{formatDate(date)}</p>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            className: "min-w-[185px]",
            render: (_text: any, record: any) => {
                return (
                    <div className='flex items-center gap-4'>
                        <button className="text-xs font-medium px-4 py-1 rounded-full bg-[#E6E6E7] hover:text-gray-800 "><Link href={`/blog/${record?._id}`}>Edit Blog</Link></button>

                        <AppModal button={
                            <button className="text-xs text-white px-4 py-1 rounded-full w-full bg-red">Remove</button>}
                            cancelButtonTitle="No, Don’t"
                            primaryButtonTitle="Yes. Remove"
                            primaryButtonAction={() => deleteProduct(record?._id)}
                        >
                            <div className='max-w-80'>
                                <p className="text-center text-[#828282] pt-4 text-lg">Are you sure  Remove <span className="text-textDark font-medium">{record?.name}</span> from the user list?</p>
                            </div>
                        </AppModal>


                    </div>
                )
            }
        },
    ];

    return (
        <>
            <AppTable
                columns={columns}
                infoQuery={infoQuery}
                setPage={setPage}
                onInputChange={(text) => setSearch(text)}
                headerText="Blogs List"
                button={
                    <Link href={"/add-blog"}>
                        <button className="roundedBtn">Add New Blog</button>
                    </Link>
                }
            />
        </>
    );
};

export default Blogs;