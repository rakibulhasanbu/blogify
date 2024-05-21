import prisma from "../../utils/prisma";

const createBlogIntoBD = async (user: any, payload: any) => {
  const authorId = user?.userId;
  const { description, imageUrl, title } = payload;

  // Create the found item
  const createBlog = await prisma.blog.create({
    data: {
      description,
      imageUrl,
      title,
      authorId,
    },
  });

  return createBlog;
};

const getBlogsFromDB = async (query: any) => {
  const {
    searchTerm,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
    availability,
  } = query;

  // Prepare filters
  let where: any = {};

  if (searchTerm) {
    where = {
      OR: [
        { location: { contains: searchTerm as string, mode: "insensitive" } },
        {
          description: { contains: searchTerm as string, mode: "insensitive" },
        },
        {
          utilitiesDescription: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
      ],
    };
  }
  if (availability) {
    where.availability = availability === "true" ? true : false;
  }

  // Prepare sorting
  const orderBy = sortBy
    ? { [sortBy as string]: sortOrder || "asc" }
    : undefined;

  // Retrieve paginated and filtered found items
  const foundItems = await prisma.blog.findMany({
    where,
    orderBy,
    take: Number(limit),
    skip: (Number(page) - 1) * Number(limit),
  });

  const total = await prisma.blog.count({ where });

  const responseData = {
    meta: {
      total,
      page: Number(page),
      limit: Number(limit),
    },
    data: foundItems,
  };

  return responseData;
};

const UpdateBlogByIdIntoDB = async (id: any, params: any) => {
  const { description, title, imageUrl } = params;

  // Update the Blog status
  const updatedBlog = await prisma.blog.update({
    where: {
      id: id,
    },
    data: {
      description,
      title,
      imageUrl,
    },
  });

  return updatedBlog;
};

const deleteBlogByIdFromDB = async (id: string) => {
  const deletedBlog = await prisma.blog.delete({
    where: {
      id: id,
    },
  });

  return deletedBlog;
};

export const BlogService = {
  createBlogIntoBD,
  getBlogsFromDB,
  UpdateBlogByIdIntoDB,
  deleteBlogByIdFromDB,
};
