Coil Calculator - 

Version:	3.00
Created:	April 28, 2015
Author:		Redge Shepherd
GitHub:		Coil_Calculator
Email:		versalytics@gmail.com

VCS:		GitHub Version Control System
Commit:		03-May-2015 > Added All Base Files

The problem:

Metal stampings are typically produced from coil stock. Calculating the amount of material to
purchase to produce a given number of parts, or calculating how many parts can be produced from
a given number of coils, is typical for many materials managers and buyers.

This project also serves as an inspiration to learn and apply HTML,
CSS, and JavaScript through a practical "ready to use" application.

Inputs:

Coil Data:

	Material Grade:	If you know the material you are using, you can select the type from the drop down selector.
					The material density field will update automatically (lbs / cubic inch).
	Coil OD:		Outside Diameter of the coil (inches).
	Coil ID:		Inside Diameter of the coil (inches).
	Coil Width:		Coil Width (inches).
	Thickness:		Material Thickness (inches).
	Density:		A value can be entered manually to override any value automatically
					populated by the Material Grade selection.
					
Notes on Units:		Default density is pounds per cubic inch (lbs / cu. in.) although metric values may be used
					as well.  At this time no conversion utility is offered.  If all units are entered using the
					same measurement system, the formulas will calculate the results correctly.
					
Tooling Data:

	Progression:	Feed length or pitch of the material per stroke of the press.
	Makes:			Number of parts produced per stroke of the press.
	Strip Length:	Length of the strip in the tool.  Many press shops leave an end strip with the die at the
					end of the production run.
	Strip Count:	The number of strips that may be "lost" due to end or production or as the result of a
					tooling failure that requires resetting of the tool.
	Parts Required:	For a given a quantity of parts, the coil calculator will determine the number of coils
					required based on the dimensions provided in the "Coil Data" section above.
	Yield %:		Some stamping operations are prone to inherent process scrap.  The yield factor should be
					based on historical quality performance metrics.
	Known Weight:	If the weight of the material is known, the coil calculator will determine the number of
					parts that can be produced based on the "blank weight" and yield %.
	
	Include Wraps:  Check the box to include the inner and outer wraps as part of the total wieght of the material.
					If the box is not checked, the coil calculator will determine the weight of the inner and
					outer wraps and subtract this amount from the total weight available for production.
	Include Strips:	Check the box to include strips per the strip length and strip count.  If the box is not checked,
					the weight of the strip(s) is subtracted from the total weight available for production.
					
After all data has been entered, click the calculate button to generate the results:

	Results:
		Coil Weight (lbs)
		Blank Weight (lbs)
		Part Weight (lbs) > Note that the part weight = Blank Weight / Makes
		Strip Weight (lbs)
		Pieces (Each) > The number of "Blank Weight Parts" * Makes
		Coil Length (in)
		Coils Required ()
	
	Total Weight / Pieces:
		Total Coil Weight (lbs)
		Total Pieces (Each)
		Total Length (in)
		Total Length (ft)
	
	Wraps:
		Outer Wrap (lbs)
		Inner Wrap (lbs)
		Pounds Only (lbs)
		Offal (lbs)
		Known Weight to Parts (Each) The number "Blank Weight Parts" * Makes
		
Opportunities for improvement:

	1.	Include unit conversion utility for mixed measurement types.
			Individual unit selection based on <selector> units.
	2.	Expand list of available material grades
	3.	Replace result <input> with HTML manipulation (innerHTML)
	4.	Provide a feedback mechanism for users to comment / request updates.


