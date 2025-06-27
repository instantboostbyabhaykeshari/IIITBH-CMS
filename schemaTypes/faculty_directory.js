export default {
  name: 'faculty_directory',
  title: 'Faculty_directory',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'branch',
      title: 'Branch',
      type: 'string',
      options: {
        list: ['cse', 'ece', 'mae', 'mnc'],
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Faculty', 'Temporary Faculty', 'Staff'],
      },
    },
  ],
};
