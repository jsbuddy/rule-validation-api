export const welcome = (_, res) => {
    return res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data: {
            name: "Jude Francis",
            github: "@jsbuddy",
            email: "judecodes@gmail.com",
            mobile: "+2347066198768",
            twitter: "@judecodes"
        }
    });
};
