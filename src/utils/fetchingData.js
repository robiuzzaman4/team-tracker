// fetch all members data
export const getMembers = async () => {
    const res = await fetch('team-tracker-alpha.vercel.app/api/members', {
        cache: 'no-cache'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

// fetch single members data
export const getSingleMember = async (id) => {
    const res = await fetch(`team-tracker-alpha.vercel.app/api/members/${id}`, {
        cache: 'no-cache'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}