import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { IconType } from 'react-icons';
import qs from 'query-string'

export interface CategoriesBoxProps {
    label: string;
    Icon: IconType
    selected: boolean
}

function CategoriesBox({ label, Icon, selected }: CategoriesBoxProps) {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = React.useCallback(() => {
        let queryParams = {};
        if (params) {
            queryParams = qs.parse(params.toString());
        }
        const updatedQuery: any = {
            ...queryParams,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);


    }, [params, router, label]);


    return (
        <div
            className={`
                flex
                flex-col
                justify-center
                items-center
                gap-2
                p-3
                transition
                cursor-pointer
                border-b-2
                hover:text-neutral-800
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800': 'text-neutral-500'}
            `}
            onClick={handleClick}
        >
            <Icon size={26} />
            <label className="
                font-medium
                text-sm
            ">{label}</label>
        </div>
    )
}

export default CategoriesBox