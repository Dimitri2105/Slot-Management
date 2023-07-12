const Slot = require("../modals/slotModal");

exports.addToStorage = async (req, res, next) => {
  console.log("INSIDE BACKEND ADD TO STORAGE");
  console.log(req.body);
  try {
    const date = req.body.date;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    if (!date || !startTime || !endTime) {
      return res.status(400).json("All fields are necessary !!! ");
    }

    const existingSlot = await Slot.findOne({ where : {
        dateInput : date,
        startTimeInput : startTime,
        endTimeInput : endTime

    }})
    console.log('>>>>>>>>>>existing slot is >>>>>>>>' , existingSlot)
    if (existingSlot){
        return res.status(400).json({message : "Slot is already created"})
    }
    const newSlot = await Slot.create( {
        dateInput : date,
        startTimeInput : startTime,
        endTimeInput : endTime
    })

    console.log('>>new slot is >>>>>>>',newSlot)
    res.status(200).json({ message : "Slot successfully created " , Slot : newSlot})

  } catch (error) {
    console.log(error);
    res.status(404).json({ message: " Something Went Wrong " });
  }
};
