const axios = require('axios')

class SpotigramController {
    static async home(req, res, next) {
        try {
            res.status(200).json({ message: 'Spotigram Server is live!' })
        } catch (error) {
            next(error)
        }
    }
    
    static async main(req, res, next) {
        try {
            const { code } = req.body
            let access_token
            let profile
            axios({
                method: 'POST',
                url: process.env.SPOTIFY_API_TOKEN,
                headers: {
                    Authorization: `Basic ${process.env.BASE64_ENCODED_DEV_SPOTIFY}`
                },
                params: {
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: process.env.REDIRECT_URI
                }
            })
                .then(({ data }) => {
                    access_token = data.access_token
                    return axios({
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${access_token}`
                        },
                        url: process.env.SPOTIFY_GET_USER_PRIVATE
                    })
                })
                .then(({ data }) => {
                    profile = data
                    return axios({
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${access_token}`
                        },
                        url: process.env.SPOTIFY_GET_USER_TOP_TRACKS
                    })
                })
                .then(({ data }) => {
                    console.log(profile, 'PROFIL')
                    console.log(data, 'TRACKS');
                    res.status(200).json(data)
                })
                .catch(err => {
                    throw err
                })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SpotigramController