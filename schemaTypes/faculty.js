export default {
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'joined',
      title: 'Joined Year',
      type: 'number',
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institute', title: 'Institute', type: 'string' },
            { name: 'year', title: 'Year', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'text',
    },
    {
      name: 'teaching',
      title: 'Teaching',
      type: 'text',
    },
    {
      name: 'researchArea',
      title: 'Area of Research',
      type: 'text',
    },
    {
      name: 'publications',
      title: 'Publications',
      type: 'text',
    },
    {
      name: 'patents',
      title: 'Patents',
      type: 'text',
    },
    {
      name: 'projects',
      title: 'Projects & Supervision',
      type: 'text',
    },
    {
      name: 'consultancy',
      title: 'Consultancy Projects',
      type: 'text',
    },
    {
      name: 'other',
      title: 'Other Information',
      type: 'text',
    },
  ],
};
