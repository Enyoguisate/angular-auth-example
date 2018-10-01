export const PERMISSIONS = [
    { 
        id: 1, 
        user: 'admin', 
        pass: 'admin', 
        allowedComponents: [
            'SecondPage', 
            'ThirdPage', 
            'FourthPage'
        ] 
    },
    { 
        id: 2, 
        user: 'user1', 
        pass: 'user1', 
        allowedComponents: [
            'ThirdPage', 
            'FourthPage'
        ] 
    },
    { 
        id: 3, 
        user: 'user2', 
        pass: 'user2', 
        allowedComponents: [
            'FourthPage'
        ] 
    },
    { 
        id: 4, 
        user: 'user3', 
        pass: 'user3', 
        allowedComponents: [] 
    },
]
