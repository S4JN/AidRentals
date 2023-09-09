const nodemailer=require('nodemailer')


const sendMail=async(req,res)=>{
    const transporter=nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
    })
    try {
        const info = await transporter.sendMail({
          from: "hr@metafic.edu.in",
          to: "20bcs059@ietdavv.edu.in",
          subject: "Metafic campus placement",
          text: "no reply",
          html: "Sorry your offer is revoked"
        });
        return info;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
      }
}

module.exports=sendMail