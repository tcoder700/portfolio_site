export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
     name:"title",
     title: "Title",
     description: "title of the skill",
     type: "string"
      },
     
      {
        name: "heroImage",
        title: "Image",
        type:"image",
        options: {
  hotspot: true,
        },
      }
    ],
  
  }