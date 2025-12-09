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

type ContactResponse = {
    data: {
        id: string;
        type: string;
        attributes: Attributes;
        relationships?: {
            category?: {
                data?: {
                    id: string;
                    type: string;
                };
            };
            contact_portal?: {
                data?: {
                    id: string;
                    type: string;
                };
            };
            contact_people?: {
                data?: Array<{
                    id: string;
                    type: string;
                }>;
            };
        };
    };
    included?: Array<{
        id: string;
        type: string;
        attributes: Record<string, any>;
        relationships?: Record<string, any>;
    }>;
}

type ContactIndexResponse = {
    data: Array<{
        id: string;
        type: string;
        attributes: Attributes;
        relationships?: {
            category?: {
                data?: {
                    id: string;
                    type: string;
                };
            };
            contact_portal?: {
                data?: {
                    id: string;
                    type: string;
                };
            };
            contact_people?: {
                data?: Array<{
                    id: string;
                    type: string;
                }>;
            };
        };
    }>;
    included?: Array<{
        id: string;
        type: string;
        attributes: Record<string, any>;
        relationships?: Record<string, any>;
    }>;
    meta?: {
        current_page?: number;
        total_pages?: number;
        total_count?: number;
    };
}

type ContactQueryParams = {
    sort?: string;
    filter?: Record<string, any>;
    include?: string;
}

type ContactDebitTransactionRequest = {
    data: {
        description?: string;
        transaction_date?: string;
        amount?: number;
        currency?: string;
        exchange_rate?: number;
        debit_account_id?: string;
    };
}

type ContactCreditTransactionRequest = {
    data: {
        description?: string;
        transaction_date?: string;
        amount?: number;
        currency?: string;
        exchange_rate?: number;
        credit_account_id?: string;
    };
}
