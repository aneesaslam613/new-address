import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "cta": z.string(),
      "ctaSecondary": z.string()
    }),
    "intro": z.object({
      "heading": z.string(),
      "body": z.string(),
      "commitment": z.string()
    }),
    "services": z.object({
      "heading": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "howItWorks": z.object({
      "heading": z.string(),
      "steps": z.array(z.object({
        "id": z.string(),
        "number": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "cta": z.object({
      "heading": z.string(),
      "body": z.string(),
      "button": z.string(),
      "note": z.string()
    })
  }),
  about: z.object({
    "headline": z.string(),
    "description": z.string(),
    "commercialRelationship": z.object({
      "heading": z.string(),
      "body": z.string()
    }),
    "customOrderModel": z.object({
      "heading": z.string(),
      "body": z.string()
    }),
    "values": z.array(z.string())
  }),
  services: z.object({
    "services": z.array(z.object({
      "title": z.string(),
      "description": z.string(),
      "id": z.string()
    })),
    "TRUST_SIGNALS": z.array(z.object({
      "label": z.string(),
      "sub": z.string(),
      "id": z.string()
    }))
  }),
  how_it_works: z.object({
    "heading": z.string(),
    "subheading": z.string(),
    "steps": z.array(z.object({
      "id": z.string(),
      "number": z.string(),
      "title": z.string(),
      "description": z.string()
    })),
    "ctaText": z.string(),
    "ctaButton": z.string(),
    "FAQS": z.array(z.object({
      "q": z.string(),
      "a": z.string(),
      "id": z.string()
    }))
  }),
  contact: z.object({
    "heading": z.string(),
    "subheading": z.string(),
    "companyName": z.string(),
    "email": z.string(),
    "responseTime": z.string(),
    "inquiriesHeading": z.string(),
    "inquiriesBody": z.string(),
    "emailButtonLabel": z.string(),
    "inquiryTypes": z.array(z.object({
      "title": z.string(),
      "desc": z.string(),
      "id": z.string()
    }))
  }),
  privacy: z.object({
    "heading": z.string(),
    "paragraphs": z.array(z.string())
  }),
  terms: z.object({
    "heading": z.string(),
    "paragraphs": z.array(z.string())
  }),
  acceptable_use: z.object({
    heading: z.string(),
    lastUpdated: z.string(),
    intro: z.string(),
    sections: z.array(z.object({
      title: z.string(),
      body: z.string()
    }))
  }),
  cancellation_policy: z.object({
    heading: z.string(),
    lastUpdated: z.string(),
    intro: z.string(),
    sections: z.array(z.object({
      title: z.string(),
      body: z.string()
    }))
  }),
  refund_policy: z.object({
    "heading": z.string(),
    "paragraphs": z.array(z.string()),
    "ctaButton": z.string()
  }),
  shipping_policy: z.object({
    "heading": z.string(),
    "lastUpdated": z.string(),
    "intro": z.string(),
    "sections": z.array(z.object({
      "title": z.string(),
      "body": z.string()
    }))
  }),
  billing_policy: z.object({
    heading: z.string(),
    lastUpdated: z.string(),
    intro: z.string(),
    sections: z.array(z.object({
      title: z.string(),
      body: z.string()
    }))
  }),
  proof_of_delivery: z.object({
    "hero": z.object({
      "eyebrow": z.string(),
      "heading": z.string(),
      "subheading": z.string()
    }),
    "table": z.object({
      "heading": z.string(),
      "description": z.string(),
      "entries": z.array(z.object({
        "id": z.string(),
        "orderId": z.string(),
        "date": z.string(),
        "destination": z.string(),
        "status": z.string(),
        "driveLink": z.string()
      }))
    }),
    "note": z.object({
      "heading": z.string(),
      "body": z.string(),
      "cta": z.string()
    })
  }),
  pricing: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "notice": z.string(),
    "individualTitle": z.string(),
    "individualItems": z.array(z.object({
      "id": z.string(),
      "service": z.string(),
      "range": z.string()
    })),
    "businessTitle": z.string(),
    "businessItems": z.array(z.object({
      "id": z.string(),
      "service": z.string(),
      "range": z.string()
    })),
    "factorsTitle": z.string(),
    "factors": z.array(z.object({
      "id": z.string(),
      "text": z.string()
    })),
    "formTitle": z.string(),
    "formSubtitle": z.string()
  }),
  shipping: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "processingRows": z.array(z.object({
      "type": z.string(),
      "time": z.string(),
      "id": z.string()
    })),
    "deliveryRows": z.array(z.object({
      "service": z.string(),
      "time": z.string(),
      "id": z.string()
    })),
    "destinationRows": z.array(z.object({
      "route": z.string(),
      "time": z.string(),
      "id": z.string()
    })),
    "carriers": z.array(z.string())
  }),
  tracking: z.object({
    "steps": z.array(z.object({
      "title": z.string(),
      "desc": z.string(),
      "id": z.string()
    }))
  }),
  prohibited_products: z.object({
    "prohibited": z.array(z.string()),
    "restricted": z.array(z.string()),
    "restrictedIntro": z.string().optional()
  }),
  pages: {
    company_info: z.object({
      "pageTitle": z.string(),
      "pageSubtitle": z.string(),
      "breadcrumb": z.string(),
      "legalEntity": z.object({
        "heading": z.string(),
        "companyName": z.string(),
        "entityType": z.string(),
        "wyomingEntityId": z.string(),
        "established": z.string(),
        "federalEin": z.string()
      }),
      "addresses": z.object({
        "heading": z.string(),
        "usOffice": z.object({
          "label": z.string(),
          "line1": z.string(),
          "line2": z.string(),
          "country": z.string(),
          "note": z.string()
        }),
        "principalOffice": z.object({
          "label": z.string(),
          "line1": z.string(),
          "line2": z.string(),
          "country": z.string()
        })
      }),
      "businessDescription": z.object({
        "heading": z.string(),
        "para1": z.string(),
        "para2": z.string()
      }),
      "contact": z.object({
        "heading": z.string(),
        "email": z.string(),
        "responseTime": z.string()
      }),
      "ctaContact": z.string(),
      "ctaAbout": z.string()
    }),
    refund_policy: z.object({
      "heading": z.string(),
      "lastUpdated": z.string(),
      "paragraphs": z.array(z.string()),
      "ctaButton": z.string()
    }),
    billing_policy: z.object({
      "heading": z.string(),
      "lastUpdated": z.string(),
      "intro": z.string(),
      "sections": z.array(z.object({
        "title": z.string(),
        "body": z.string(),
        "id": z.string()
      }))
    }),
    cancellation_policy: z.object({
      "heading": z.string(),
      "lastUpdated": z.string(),
      "intro": z.string(),
      "sections": z.array(z.object({
        "title": z.string(),
        "body": z.string(),
        "id": z.string()
      }))
    }),
    terms: z.object({
      "heading": z.string(),
      "lastUpdated": z.string(),
      "paragraphs": z.array(z.string())
    }),
    privacy: z.object({
      "heading": z.string(),
      "lastUpdated": z.string(),
      "paragraphs": z.array(z.string())
    })
  }
};
export type Schemas = typeof schemas;