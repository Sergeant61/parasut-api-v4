interface Attributes {
    name: string;
    email?: string;
    tax_number?: string;
    tax_office?: string;
    city?: string;
    district?: string;
    address?: string;
    phone?: string;
    fax?: string;
    is_abroad?: boolean;
    archive?: boolean;
    iban?: string;
    contact_type?: 'person' | 'company';
    account_type: 'customer' | 'supplier';
    balance?: number;
    trl_balance?: number;
    usd_balance?: number;
    eur_balance?: number;
    gbp_balance?: number;
    created_at?: string;
    updated_at?: string;
    short_name?: string;
    postal_code?: string;
    country?: string;
    archived?: boolean;
    untrackable?: boolean;
    invoicing_preferences?: {
        e_document_accounts?: number[];
    };
}

type ContactData = {
    data: {
        id?: string;
        type?: string;
        attributes?: Attributes;
        relationships?: {
            category?: {
                data?: {
                    id?: string;
                    type?: string;
                };
            };
            contact_portal?: {
                data?: {
                    id?: string;
                    type?: string;
                };
            };
            contact_people?: {
                data?: {
                    id?: string;
                    type?: string;
                }[];
            };
        };
    };
}
