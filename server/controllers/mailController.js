const nodemailer=require('nodemailer')


const sendMail=async(req,res)=>{
    console.log(req.body.data);
    // res.send(req.body.data);

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
          from: "sahayta@sr.edu.in",
          to: "20bcs060@ietdavv.edu.in",
          subject: "Mail check",
          text: "no reply",
          html: "sraaas"
        });
        return info;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
      }
}

module.exports=sendMail