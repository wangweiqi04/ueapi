---
id: actor
title: Actor
sidebar_label: Actor
displayed_sidebar: gameframework
---

## Inheritance Hierarchy

```
UObjectBase
 UObjectBaseUtility
  UObject
   Actor
```

## References

| References  | Detail                                                      |
| ----------- | ----------------------------------------------------------- |
| **Module**  | Engine                                                      |
| **Header**  | /Engine/Source/Runtime/Engine/Classes/GameFramework/Actor.h |
| **Include** | `#include "GameFramework/Actor.h"`                          |

## Syntax

```
class Actor : public UObject
```

## Remarks

Actor is the base class for an Object that can be placed or spawned in a level. Actors may contain a collection of ActorComponents, which can be used to control how actors move, how they are rendered, etc. The other main function of an Actor is the replication of properties and function calls across the network during play.

Actor initialization has multiple steps, here's the order of important virtual functions that get called:

UObject::PostLoad: For actors statically placed in a level, the normal UObject PostLoad gets called both in the editor and during gameplay. This is not called for newly spawned actors.

- UActorComponent::OnComponentCreated: When an actor is spawned in the editor or during gameplay, this gets called for any native components. For blueprint-created components, this gets called during construction for that component. This is not called for components loaded from a level.

- Actor::PreRegisterAllComponents: For statically placed actors and spawned actors that have native root components, this gets called now. For blueprint actors without a native root component, these registration functions get called later during construction.

- UActorComponent::RegisterComponent: All components are registered in editor and at runtime, this creates their physical/visual representation. These calls may be distributed over multiple frames, but are always after PreRegisterAllComponents. This may also get called later on after an UnregisterComponent call removes it from the world.

- Actor::PostRegisterAllComponents: Called for all actors both in the editor and in gameplay, this is the last function that is called in all cases.

- Actor::PostActorCreated: When an actor is created in the editor or during gameplay, this gets called right before construction. This is not called for components loaded from a level.

- Actor::UserConstructionScript: Called for blueprints that implement a construction script.

- Actor::OnConstruction: Called at the end of ExecuteConstruction, which calls the blueprint construction script. This is called after all blueprint-created components are fully created and registered. This is only called during gameplay for spawned actors, and may get rerun in the editor when changing blueprints.

- Actor::PreInitializeComponents: Called before InitializeComponent is called on the actor's components. This is only called during gameplay and in certain editor preview windows.

- UActorComponent::Activate: This will be called only if the component has bAutoActivate set. It will also got called later on if a component is manually activated.

- UActorComponent::InitializeComponent: This will be called only if the component has bWantsInitializeComponentSet. This only happens once per gameplay session.

- Actor::PostInitializeComponents: Called after the actor's components have been initialized, only during gameplay and some editor previews.

- Actor::BeginPlay: Called when the level starts ticking, only during actual gameplay. This normally happens right after PostInitializeComponents but can be delayed for networked or child actors.
