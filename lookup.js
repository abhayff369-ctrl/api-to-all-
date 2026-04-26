export default async function handler(req, res) {
  try {
    const { service, number, gstin, aadhar, pan, rc, ration, pincode, ip, username, code, phone, num, q } = req.query;

    let url = null;

    // Number Info
    if (service === "number") {
      url = `https://techvishalboss.com/api/v1/lookup.php?key=${process.env.TVB_KEY}&service=number&number=${number}`;
    }

    // GST Info
    else if (service === "gst") {
      url = `https://anon-gst-info.vercel.app/advanced/gstin?key=${process.env.GST_KEY}&gstin=${gstin}`;
    }

    // Aadhar to PAN
    else if (service === "aadhar_to_pan") {
      url = `https://techvishalboss.com/api/v1/lookup.php?key=${process.env.TVB_KEY}&service=aadhar_to_pan&aadhar=${aadhar}`;
    }

    // PAN Info
    else if (service === "pan") {
      url = `https://techvishalboss.com/api/v1/lookup.php?key=${process.env.TVB_KEY}&service=pan&pan=${pan}`;
    }

    // Vehicle Info
    else if (service === "vehicle") {
      url = `https://vehicle-eight-vert.vercel.app/api?rc=${rc}`;
    }

    // Aadhar to Ration
    else if (service === "aadhar_ration") {
      url = `https://techvishalboss.com/api/v1/lookup.php?key=${process.env.TVB_KEY}&service=aadhar_ration&aadhar=${aadhar}`;
    }

    // PAN to GST
    else if (service === "pan_to_gst") {
      url = `https://anon-gst-info.vercel.app/advanced/pan?key=${process.env.GST_KEY}&pan=${pan}`;
    }

    // Ration Info
    else if (service === "ration") {
      url = `https://techvishalboss.com/api/v1/lookup.php?key=${process.env.TVB_KEY}&service=ration_info&ration=${ration}`;
    }

    // Pincode Info
    else if (service === "pincode") {
      url = `https://api.postalpincode.in/pincode/${pincode}`;
    }

    // IP Info
    else if (service === "ip") {
      url = `https://anon-multi-info.vercel.app/ipinfo?key=${process.env.IP_KEY}&ip=${ip}`;
    }

    // Instagram
    else if (service === "instagram") {
      url = `https://anon-insta-info.vercel.app/profile?key=${process.env.IP_KEY}&username=${username}`;
    }

    // Telegram
    else if (service === "telegram") {
      url = `https://anon-tg-info.vercel.app/telegram?key=${process.env.IP_KEY}&username=${username}`;
    }

    // IFSC
    else if (service === "ifsc") {
      url = `https://anon-multi-info.vercel.app/ifsc?key=${process.env.TVB_KEY}&code=${code}`;
    }

    // Phone Specs
    else if (service === "phone") {
      url = `https://anon-phone-specs.vercel.app/specs?key=${process.env.PHONE_KEY}&phone=${phone}`;
    }

    // Num to Name
    else if (service === "num_name") {
      url = `https://anon-num-info.vercel.app/name?key=${process.env.TVB_KEY}&num=${num}`;
    }

    // Pakistan CNIC
    else if (service === "pak") {
      url = `https://anon-pak-info.vercel.app/cnic?key=${process.env.PAK_KEY}&q=${q}`;
    }

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Invalid service parameter"
      });
    }

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json({
      success: true,
      service,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
