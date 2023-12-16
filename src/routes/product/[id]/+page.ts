import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        pageNo: params?.id ? +params.id : 1
    };
};
