---
id: structure
sidebar_label: "Data Structure"
displayed_sidebar: api
---

```
struct  D3OSVector
{
    float X;
    float Y;
    float Z;
}
struct D3OSVector2D
{
     float X;
     float Y;
}
struct D3OSVector4
{
     float X;
     float Y;
     float Z;
     float W;
}

struct  D3OSLinearColor
{
	uint8 R;
	uint8 G;
	uint8 B;
	uint8 A;
}
struct FRotator
{
	float Roll;
	float Pitch;
	float Yaw;
}

struct D3OSPostProcessSettings
{
   EBloomMethod Method;
   D3OSVector4 Saturetion;
   float bloomInstensity;
   float FinalGatherQuality;
   float LumenQuality;
   float ExposureCompensation;
   float ExposureMinBrightness;
   float ExposureMaxBrightness;
}
```
