import jwt from 'jsonwebtoken';


// Generate new Json Web Token 
export const generateJsonWebToken = ( idPerson: string ): string => {

    try {

        return jwt.sign( { idPerson }, process.env.TOKEN_SECRET || 'Nepal_Social', {
            expiresIn: '24h'
        });

    } catch (err) {
        return 'Failed to generatethe  Jwt - Token';
    }

    
}