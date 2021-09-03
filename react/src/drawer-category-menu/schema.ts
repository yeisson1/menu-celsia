export const schema = {
    title: "Category menu mobile",
    type: "object",
    properties: {
        departments: {
            minItems: 0,
            title: 'Departments',
            type: 'array',
            items: {
                title: 'Department',
                type: 'object',
                properties: {
                    '__editorItemTitle': {
                        title: 'Title',
                        type: 'string',
                    },
                    url: {
                        title: 'link',
                        type: 'string',
                    },
                    ico: {
                        title: 'icon',
                        type: 'string',
                        widget: {
                            'ui:widget': 'textarea'
                        }
                    },
                    
                    categories: {
                        minItems: 0,
                        title: 'Categories',
                        type: 'array',
                        items: {
                            title: 'Category',
                            type: 'object',
                            properties: {
                                '__editorItemTitle': {
                                    title: 'Title',
                                    type: 'string',
                                },
                                url: {
                                    title: 'link',
                                    type: 'string',
                                },
                                ico: {
                                    title: 'icon',
                                    type: 'string',
                                    widget: {
                                        'ui:widget': 'textarea'
                                    }
                                },
                                subcategories: {
                                    minItems: 0,
                                    title: 'Sub categories',
                                    type: 'array',
                                    items: {
                                        title: 'Sub category',
                                        type: 'object',
                                        properties: {
                                            '__editorItemTitle': {
                                                title: 'Title',
                                                type: 'string',
                                            },
                                            url: {
                                                title: 'link',
                                                type: 'string',
                                            },
                                            ico: {
                                                title: 'icon',
                                                type: 'string',
                                                widget: {
                                                    'ui:widget': 'textarea'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        additionalInfo: {
          minItems: 0,
          title: 'aditional info',
          type: 'array',
          maxItams: 3,
          items: {
            title: 'Info',
            type: 'object',
            properties: {
              __editorItemTitle: {
                title: 'Title',
                type: 'string',
              },
              url: {
                  title: 'link',
                  type: 'string',
              },
              ico: {
                title: 'icon',
                type: 'string',
                widget: {
                    'ui:widget': 'textarea'
                }
              }
            }
          }
        }
    }
}